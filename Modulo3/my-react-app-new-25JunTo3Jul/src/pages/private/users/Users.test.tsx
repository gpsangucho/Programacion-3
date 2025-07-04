// __tests__/Users.test.tsx
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import Users from "./Users";
import axiosInstance from "../../../api/axios"
//import React from "react";

// Mock de axios
jest.mock("../../../api/axios");
const mockedAxios = axiosInstance as jest.Mocked<typeof axiosInstance>;

const mockUsers = {
  data: {
    data: {
      items: [
        { id: "1", username: "julio", email: "julio@test.com", password: "" },
        { id: "2", username: "ana", email: "ana@test.com", password: "" },
      ],
    },
  },
};

describe("Users Component", () => {
  beforeEach(() => {
    mockedAxios.get.mockResolvedValue(mockUsers);
  });

  it("renderiza usuarios obtenidos desde la API", async () => {
    render(<Users />);

    // Esperar a que los usuarios se muestren
    await waitFor(() => {
      expect(screen.getByText("julio")).toBeInTheDocument();
      expect(screen.getByText("ana")).toBeInTheDocument();
    });
  });

  it("filtra los usuarios por nombre", async () => {
    render(<Users />);

    await waitFor(() => screen.getByText("julio"));

    const searchInput = screen.getByPlaceholderText("Buscar...");
    fireEvent.change(searchInput, { target: { value: "ana" } });

    expect(screen.queryByText("julio")).not.toBeInTheDocument();
    expect(screen.getByText("ana")).toBeInTheDocument();
  });

  it("muestra el diálogo de nuevo usuario al hacer clic en 'Nuevo usuario'", async () => {
    render(<Users />);
    const button = screen.getByRole("button", { name: /nuevo usuario/i });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(/guardar/i)).toBeInTheDocument(); // Asumiendo que tu diálogo tiene un botón "Guardar"
    });
  });
});

//Ejecusion prueba: D:\my-app-react\Reack-New_blog-app-3jul>npm run test Users.test.tsx