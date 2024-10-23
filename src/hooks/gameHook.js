import axiosInstance from "./axiosConfig";
import { useState, useEffect, createElement } from "react";
import {
  FaCarCrash,
  FaCircleDollarToSlot,
  IoFishOutline,
  IoNuclearOutline,
} from "../assets/icons";
const gameHook = () => {
  // Get Category list
  const [gameCategory, setGameCategory] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState(true);
  const [categoryError, setCategoryError] = useState(null);
  const [games, setGames] = useState([]);
  const [gameLoading, setGameLoading] = useState(true);
  const [gameError, setGameError] = useState(null);

  const fetchGames = async (category) => {
    let endpoint = null;
    switch (category) {
      case "all":
        endpoint = "/all-games";
        break;
      case 1:
        endpoint = "/crash-games";
        break;
      case 2:
        endpoint = "/slot-games";
        break;
      case 3:
        endpoint = "/fish-games";
        break;
      case 4:
        endpoint = "/roulette-games";
        break;
      case 5:
        endpoint = "/video-poker-games";
        break;
      case 6:
        endpoint = "/dice-games";
        break;
      default:
        endpoint = "/all-games";
    }

    try {
      const response = await axiosInstance.get(endpoint);
      setGames(response.data);
    } catch (err) {
      setGameError(err);
    } finally {
      setGameLoading(false);
    }
  };

  useEffect(() => {
    const fetchGameCategories = async () => {
      try {
        const response = await axiosInstance.get("/game-categories");
        setGameCategory(response.data);
      } catch (err) {
        setCategoryError(err);
      } finally {
        setCategoryLoading(false);
      }
    };

    fetchGameCategories();
  }, []);

  // GetIcon
  const getCategoryIcon = (category) => {
    let icon = null;
    switch (category) {
      case "all":
        icon = createElement(FaCarCrash);
        break;
      case 1:
        icon = createElement(FaCarCrash);
        break;
      case 2:
        icon = createElement(FaCircleDollarToSlot);
        break;
      case 3:
        icon = createElement(IoFishOutline);
        break;
      case 4:
        icon = createElement(IoNuclearOutline);
        break;
      case 5:
        icon = createElement(FaCarCrash);
        break;
      case 6:
        icon = createElement(FaCarCrash);
        break;
      default:
        icon = createElement(FaCarCrash);
    }

    return icon;
  };

  return {
    gameCategory,
    categoryLoading,
    categoryError,
    fetchGames,
    games,
    gameLoading,
    gameError,
    getCategoryIcon,
  };
};

export default gameHook;
