import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IoArrowForward } from "react-icons/io5";
import "./AddCategories.css"; // Assurez-vous d'inclure un fichier CSS pour le style
import { useEffect, useState } from "react";
import TopStep from "../../components/TopStep/TopStep";
import Placeholder from "../../assets/placeholder.svg"; // Assurez-vous d'importer l'image de votre placeholder

// Schéma de validation avec Yup
const schema = yup.object().shape({
  titleFr: yup.string().required("Veuillez entrer le Titre en Français"),
  titleAr: yup.string().required("Veuillez entrer le Titre en Arabe"),
  titleEn: yup.string().required("Veuillez entrer le Titre en Anglais"),
  titleEs: yup.string().required("Veuillez entrer le Titre en Espagnol"),
});

type FormInputs = {
  titleFr: string;
  titleAr: string;
  titleEn: string;
  titleEs: string;
};

export default function Addcategory() {
  const [subCategories, setSubCategories] = useState<FormInputs[]>([
    { titleFr: "", titleAr: "", titleEn: "", titleEs: "" },
  ]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {};
  const handleSubChange = (
    index: number,
    field: keyof FormInputs,
    value: string
  ) => {
    const updated = [...subCategories];
    updated[index][field] = value;
    setSubCategories(updated);
  };

  const addSubCategory = () => {
    setSubCategories([
      ...subCategories,
      { titleFr: "", titleAr: "", titleEn: "", titleEs: "" },
    ]);
  };

  return (
    <>
      <TopStep prog="100%" />
      <div className="container">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form-step3"
          style={{ padding: "3vh 7vw" }}
        >
          <div className="Title-button">
            <h2>Ajouter une Catégorie</h2>
            <button type="submit" className="continue-button">
              <span>Continue</span>
              <IoArrowForward />
            </button>
          </div>

          <div
            className="input-container"
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "0.7vw",
            }}
          >
            <input
              type="file"
              id="addImage-category"
              accept="image/*"
              className="input-file-img"
            />
            <label htmlFor="addImage-category" className="label-file-img">
              <img src={Placeholder} alt="" />
            </label>
            <div style={{ width: "40%", marginTop: "2vh" }}>
              <input
                type="text"
                {...register("titleFr")}
                id="titleFr"
                placeholder="Titre en Français"
                className={`input ${errors.titleFr ? "input-error" : ""}`}
              />
              {errors.titleFr && (
                <p className="error-message">{errors.titleFr.message}</p>
              )}
            </div>
            <div style={{ width: "40%", marginTop: "2vh" }}>
              <input
                type="text"
                {...register("titleAr")}
                id="titleAr"
                placeholder="Titre en Arabe"
                className={`input ${errors.titleFr ? "input-error" : ""}`}
              />
              {errors.titleFr && (
                <p className="error-message">{errors.titleFr.message}</p>
              )}
            </div>
            <div style={{ width: "40%", marginTop: "2vh" }}>
              <input
                type="text"
                {...register("titleEn")}
                id="titleEn"
                placeholder="Titre en Anglais"
                className={`input ${errors.titleFr ? "input-error" : ""}`}
              />
              {errors.titleFr && (
                <p className="error-message">{errors.titleFr.message}</p>
              )}
            </div>
            <div style={{ width: "40%", marginTop: "2vh" }}>
              <input
                type="text"
                {...register("titleEs")}
                id="titleEs"
                placeholder="Titre en Espagnol"
                className={`input ${errors.titleFr ? "input-error" : ""}`}
              />
              {errors.titleFr && (
                <p className="error-message">{errors.titleFr.message}</p>
              )}
            </div>
          </div>

          {/* Bouton supplémentaire pour mobile */}
          <button type="submit" className="button-respo">
            <span>Continue</span>
            <IoArrowForward />
          </button>

          <div className="Title-button">
            <h2>Ajouter une Sous-Catégorie</h2>
          </div>

          {subCategories.map((sub, index) => (
            <div
              className="input-container"
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "0.7vw",
                marginBottom: "2vh",
              }}
            >
              <input
                type="file"
                id={`addImage-subcategory-${index}`}
                accept="image/*"
                className="input-file-img"
              />
              <label
                htmlFor={`addImage-subcategory-${index}`}
                className="label-file-img"
              >
                <img src={Placeholder} alt="" />
              </label>

              <div style={{ width: "40%", marginTop: "2vh" }}>
                <input
                  type="text"
                  placeholder={`Titre en Français`}
                  className="input"
                  value={sub.titleFr}
                  onChange={(e) =>
                    handleSubChange(index, "titleFr", e.target.value)
                  }
                />
              </div>
              <div style={{ width: "40%", marginTop: "2vh" }}>
                <input
                  type="text"
                  placeholder={`Titre en Arabe`}
                  className="input"
                  value={sub.titleAr}
                  onChange={(e) =>
                    handleSubChange(index, "titleAr", e.target.value)
                  }
                />
              </div>
              <div style={{ width: "40%", marginTop: "2vh" }}>
                <input
                  type="text"
                  placeholder={`Titre en Anglais`}
                  className="input"
                  value={sub.titleEn}
                  onChange={(e) =>
                    handleSubChange(index, "titleEn", e.target.value)
                  }
                />
              </div>
              <div style={{ width: "40%", marginTop: "2vh" }}>
                <input
                  type="text"
                  placeholder={`Titre en Espagnol`}
                  className="input"
                  value={sub.titleEs}
                  onChange={(e) =>
                    handleSubChange(index, "titleEs", e.target.value)
                  }
                />
              </div>
            </div>
          ))}

          <div style={{ textAlign: "center" }}>
            <button
              type="button"
              className="label-file-img"
              onClick={addSubCategory}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: "1.5rem", marginRight: "0.5rem" }}>
                +
              </span>{" "}
              Ajouter une sous-catégorie
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
