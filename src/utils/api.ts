const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const authApi = {
  login: async (data: LoginData): Promise<AuthResponse> => {
    const response = await fetch(`${BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });
    return response.json();
  },

  signup: async (data: SignupData): Promise<AuthResponse> => {
    const response = await fetch(`${BASE_URL}/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });
    return response.json();
  },

  logout: async (): Promise<void> => {
    await fetch(`${BASE_URL}/api/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
  },

  me: async (): Promise<AuthResponse> => {
    const response = await fetch(`${BASE_URL}/api/auth/me`, {
      method: "GET",
      credentials: "include",
    });
    return response.json();
  },
};
