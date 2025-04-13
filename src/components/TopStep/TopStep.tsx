import { IoArrowBack } from "react-icons/io5";
import "./TopStep.css";
import useMultiStepFormStore from "../../store/Zustand/Store";
import { useEffect, useState } from "react";
// import { getCategory } from "@/services/categoryServices";
import { useNavigate } from "react-router-dom";

// TODO : move this to a separate file in data

export default function TopStep({ prog }: { prog: string }) {
  const { previousStep, step, formData, updateStepData, resetStore } =
    useMultiStepFormStore();
  const [categories, setCategories] = useState([]);
  const Navigate = useNavigate();
  const handleClick = () => {
    if (step === 1) {
      Navigate(-1);
      resetStore();
    } else {
      previousStep();
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategory = e.target.value;
    updateStepData(3, { category: newCategory });
  };
  // useEffect(() => {
  //   getCategory()
  //     .then((res) => {
  //       setCategories(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <div className="top-step">
      <div className="content-top-step">
        <div className="back" onClick={handleClick}>
          <IoArrowBack />
        </div>
        <div className="text-logo">Harmonya</div>
        <span></span>
      </div>
      {step === 6 && (
        <ul className="infos-confimation">
          <li>{formData[1] && formData[1].serviceName}</li>
          <li>{formData[1] && formData[1].servicePrice} DZD</li>
          <li>
            <span
              style={{
                background: formData[5]?.color,
              }}
            ></span>
          </li>
          <li>
            <select
              value={formData[3]?.category || ""}
              onChange={handleCategoryChange}
            >
              <option value="" disabled>
                Sélectionner une catégorie
              </option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.title}
                </option>
              ))}
            </select>
          </li>
        </ul>
      )}

      <div className="step">
        <div className="progresse" style={{ width: prog }}></div>
      </div>
    </div>
  );
}
