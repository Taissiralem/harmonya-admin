import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IoArrowForward } from "react-icons/io5";
import "./PubStep3.css"; // Assurez-vous d'inclure un fichier CSS pour le style
import useMultiStepFormStore from "@/store/Zustand/Store";
import { useEffect } from "react";

// Schéma de validation avec Yup
const schema = yup.object().shape({
  dateDebut: yup
    .string()
    .required("Veuillez entrer une date de début")
    .matches(
      /^\d{4}-\d{2}-\d{2}$/,
      "Format de date invalide, utilisez DD/MM/YYYY"
    ),

  dateFin: yup
    .string()
    .required("Veuillez entrer une date de fin")
    .matches(
      /^\d{4}-\d{2}-\d{2}$/,
      "Format de date invalide, utilisez DD/MM/YYYY"
    ),
});

type FormInputs = {
  dateDebut: string;
  dateFin: string;
};

export default function StoreStep3() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });
  const { step, nextStep, updateStepData, formData } = useMultiStepFormStore();
  useEffect(() => {
    if (formData && formData[3] && typeof formData[3] === "object") {
      Object.entries(formData[3] as FormInputs).forEach(([key, value]) => {
        setValue(key as keyof FormInputs, value as string); // Conversion explicite
      });
    }
  }, [formData, setValue]);
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    updateStepData(step, data);
    nextStep();
  };

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-step3"
        style={{ padding: "3vh 7vw" }}
      >
        <div className="Title-button">
          <h2>Select date</h2>
          <button type="submit" className="continue-button">
            <span>Continue</span>
            <IoArrowForward />
          </button>
        </div>

        <div className="input-container input-container22">
          <h1>Start</h1>
          <h1>End</h1>
        </div>

        <div
          className="input-container"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div style={{ width: "40%" }}>
            <input
              type="date"
              {...register("dateDebut")}
              id="dateDebut"
              placeholder="Date de début"
              className={`input ${errors.dateDebut ? "input-error" : ""}`}
            />
            {errors.dateDebut && (
              <p className="error-message">{errors.dateDebut.message}</p>
            )}
          </div>

          <div style={{ width: "40%" }}>
            <input
              type="date"
              {...register("dateFin")}
              placeholder="Date de fin"
              className={`input ${errors.dateDebut ? "input-error" : ""}`}
            />
            {errors.dateDebut && (
              <p className="error-message">{errors.dateDebut.message}</p>
            )}
          </div>
        </div>

        {/* Bouton supplémentaire pour mobile */}
        <button type="submit" className="button-respo">
          <span>Continue</span>
          <IoArrowForward />
        </button>
      </form>
    </div>
  );
}
