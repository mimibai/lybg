export const localSave = (key, value) => {
  localStorage.setItem(key, value);
};

export const localRead = key => {
  return localStorage.getItem(key) || '';
};

export const TOKEN_KEY = '54doctor_credentials';
export const REFRESH_TOKEN_KEY = 'refreshToken';
