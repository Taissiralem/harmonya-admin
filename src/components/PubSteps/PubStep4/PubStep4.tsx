import "./PubStep4.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IoArrowForward } from "react-icons/io5";
import { useEffect, useState } from "react";
import useMultiStepFormStore from "@/store/Zustand/Store";
import { useNavigate } from "react-router-dom";
// import { CreateStore } from "@/services:/storeService";

// Schéma de validation avec Yup
const schema = yup.object().shape({
  description: yup.string().required("La description est obligatoire"),
  title: yup.string().required("Le titre est obligatoire"),
  link: yup.string().required("Le lien est obligatoire"),
});

type FormInputs = {
  description: string;
  title: string;
  link: string;
};

export default function StoreStep4() {
  const [err, setErr] = useState<string>("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  const { step, updateStepData, formData } = useMultiStepFormStore();
  console.log("====================================");
  console.log(formData);
  console.log("====================================");
  // Récupérer les données de Zustand au montage
  useEffect(() => {
    const savedData = formData[4];
    console.log("savedData", savedData);
  }, [step, formData]);

  // Soumettre les employés à l'API
  const checkEmployeesAndSubmit = async () => {
    try {
      updateStepData(step, getValues());
      if (!formData || !formData[4] || formData[4].length === 0) {
        setErr("Veuillez remplir tous les champs avant de continuer.");
        return;
      }
      const formDataToSend = new FormData();

      // Vérifier si les champs obligatoires existent
      const webImg = formData[1]?.webImg || "";
      const mobileImg = formData[2]?.mobileImg || "";
      const dateDebut = formData[3]?.dateDebut?.trim() || "";
      const dateFin = formData[3]?.dateFin?.trim() || "";
      const description = formData[4]?.description?.trim() || "";
      const title = formData[4]?.title?.trim() || "";
      const link = formData[4]?.link?.trim() || "";
      if (!dateDebut || !dateFin || !description || !title || !link) {
        setErr("Veuillez remplir tous les champs obligatoires.");
        return;
      }
      console.log(formData, "FORMDATAAAAAAAAAAAAAAAA");

      // Ajouter les données JSON stringifiées
      formDataToSend.append("webImg", webImg);
      formDataToSend.append("mobileImg", mobileImg);
      formDataToSend.append("dateDebut", dateDebut);
      formDataToSend.append("dateFin", dateFin);
      formDataToSend.append("description", description);
      formDataToSend.append("title", title);
      formDataToSend.append("link", link);
      console.log(formData, "FOOOOOOOOOOOOOOOOOOOOOOOOOOO");

      // Vérifier et ajouter les images
      if (Array.isArray(formData[2].images) && formData[2].images.length > 0) {
        formData[2].images.forEach((image: File, index: number) => {
          if (image instanceof File) {
            formDataToSend.append("images", image);
          }
        });
      }

      // 🔍 Vérification des données avant envoi
      console.log(
        "Données envoyées :",
        Object.fromEntries(formDataToSend.entries())
      );

      // Envoyer à l'API
      const res = await CreateStore(formDataToSend);

      if (res.status === 201) {
        navigate("/CheckPoint/2"); // Redirection après succès
      } else {
        setErr("Erreur lors de l'enregistrement, réessayez.");
      }
    } catch (error) {
      console.error("Erreur serveur :", error);
      setErr("Erreur serveur, veuillez réessayer.");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(() => {})}>
        <div className="Title-button">
          <h2>Informations générales</h2>
          <button type="button" onClick={checkEmployeesAndSubmit}>
            <span>Continue</span>
            <IoArrowForward />
          </button>
        </div>

        <div className="double-container">
          <div style={{ width: "100%" }}>
            <input {...register("title")} placeholder="Title :" />
            <p style={{ color: "red", marginTop: "10px" }}>
              {errors.title?.message}
            </p>
          </div>
        </div>

        <div className="double-container">
          <div style={{ width: "100%" }}>
            <input {...register("link")} placeholder="Link :" />
            <p style={{ color: "red", marginTop: "10px" }}>
              {errors.link?.message}
            </p>
          </div>
        </div>
        <div className="double-container">
          <div style={{ width: "100%" }}>
            <textarea
              {...register("description")}
              placeholder="Description :"
            />
            <p style={{ color: "red", marginTop: "10px" }}>
              {errors.description?.message}
            </p>
          </div>
        </div>

        {err && <p style={{ color: "red", marginTop: "10px" }}>{err}</p>}

        <button
          type="button"
          className="button-respo"
          onClick={checkEmployeesAndSubmit}
        >
          <span>Continue</span>
          <IoArrowForward />
        </button>
      </form>
    </div>
  );
}
