import React, { useState } from "react";
import "./Categories.css";
import scissor from "@/assets/barbe.png";
import scissor2 from "@/assets/scissor.png";
import { useNavigate } from "react-router-dom";

type Category = {
  id: number;
  name: string;
  image?: string;
  SousCategories: [] | { id: number; name: string; image: string }[];
};

const categories: Category[] = [
  {
    id: 1,
    name: "Coiffure homme",
    image: scissor,
    SousCategories: [
      { id: 1, name: "Dégradé", image: scissor },
      { id: 2, name: "Classique", image: scissor },
      { id: 3, name: "Coupe moderne", image: scissor },
      { id: 4, name: "Coupe ancienne", image: scissor },
      { id: 5, name: "Coupe moderne", image: scissor },
    ],
  },
  {
    id: 2,
    name: "Barbe",
    image: scissor2,
    SousCategories: [
      { id: 1, name: "Taille barbe", image: scissor },
      { id: 2, name: "Rasage complet", image: scissor },
      { id: 3, name: "Rasage partiel", image: scissor },
      { id: 4, name: "Taille complète", image: scissor },
      { id: 5, name: "Taille partielle", image: scissor },
    ],
  },
  {
    id: 3,
    name: "Coloration",
    image: scissor,
    SousCategories: [
      { id: 1, name: "Mèches", image: scissor },
      { id: 2, name: "Coloration complète", image: scissor },
      { id: 3, name: "Coloration partielle", image: scissor },
      { id: 4, name: "Mèches complètes", image: scissor },
      { id: 5, name: "Mèches partielles", image: scissor },
      { id: 6, name: "Coloration complète", image: scissor },
    ],
  },
  {
    id: 7,
    name: "Coiffure homme",
    image: scissor,
    SousCategories: [
      { id: 1, name: "Dégradé", image: scissor },
      { id: 2, name: "Classique", image: scissor },
      { id: 3, name: "Coupe moderne", image: scissor },
      { id: 4, name: "Coupe ancienne", image: scissor },
      { id: 5, name: "Coupe moderne", image: scissor },
    ],
  },
  {
    id: 8,
    name: "Barbe",
    image: scissor2,
    SousCategories: [
      { id: 1, name: "Taille barbe", image: scissor },
      { id: 2, name: "Rasage complet", image: scissor },
      { id: 3, name: "Rasage partiel", image: scissor },
      { id: 4, name: "Taille complète", image: scissor },
      { id: 5, name: "Taille partielle", image: scissor },
    ],
  },
  {
    id: 9,
    name: "Coloration",
    image: scissor,
    SousCategories: [
      { id: 1, name: "Mèches", image: scissor },
      { id: 2, name: "Coloration complète", image: scissor },
      { id: 3, name: "Coloration partielle", image: scissor },
      { id: 4, name: "Mèches complètes", image: scissor },
      { id: 5, name: "Mèches partielles", image: scissor },
      { id: 6, name: "Coloration complète", image: scissor },
    ],
  },
  {
    id: 4,
    name: "Coiffure homme",
    image: scissor,
    SousCategories: [
      { id: 1, name: "Dégradé", image: scissor },
      { id: 2, name: "Classique", image: scissor },
      { id: 3, name: "Coupe moderne", image: scissor },
      { id: 4, name: "Coupe ancienne", image: scissor },
      { id: 5, name: "Coupe moderne", image: scissor },
    ],
  },
  {
    id: 5,
    name: "Barbe",
    image: scissor2,
    SousCategories: [
      { id: 1, name: "Taille barbe", image: scissor },
      { id: 2, name: "Rasage complet", image: scissor },
      { id: 3, name: "Rasage partiel", image: scissor },
      { id: 4, name: "Taille complète", image: scissor },
      { id: 5, name: "Taille partielle", image: scissor },
    ],
  },
  {
    id: 6,
    name: "Coloration",
    image: scissor,
    SousCategories: [
      { id: 1, name: "Mèches", image: scissor },
      { id: 2, name: "Coloration complète", image: scissor },
      { id: 3, name: "Coloration partielle", image: scissor },
      { id: 4, name: "Mèches complètes", image: scissor },
      { id: 5, name: "Mèches partielles", image: scissor },
      { id: 6, name: "Coloration complète", image: scissor },
    ],
  },
];

const CategoryPage: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );
  const selectedCategory = categories.find(
    (cat) => cat.id === selectedCategoryId
  );
  const navigate = useNavigate();

  return (
    <div className="category-container">
      {/* Left - Categories */}
      <div className="category-column">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`category-item ${
              category.id === selectedCategoryId ? "active" : ""
            }`}
            onClick={() => setSelectedCategoryId(category.id)}
          >
            <img src={category.image} alt="" style={{ width: "20px" }} />
            {category.name}
          </div>
        ))}
      </div>

      {/* Right - SousCategories */}
      {selectedCategory && (
        <div className="category-column">
          {selectedCategory.SousCategories.map((sub, index) => (
            <div key={index} className="category-item">
              <img src={sub.image} alt="" style={{ width: "20px" }} />
              {sub.name}
            </div>
          ))}
        </div>
      )}
      <div className="add-category">
        <button
          onClick={() => {
            navigate("/addcategory");
            setSelectedCategoryId(null);
          }}
        >
          Ajouter une Categorie
        </button>
        <button
          onClick={() => {
            navigate("/addsubcategory");
            setSelectedCategoryId(null);
          }}
        >
          Ajouter une Sous-categorie
        </button>
      </div>
    </div>
  );
};

export default CategoryPage;
