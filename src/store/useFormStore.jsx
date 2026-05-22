// [ ] ändra så att den stämmer till projektet, direkt kopierad från medlemsportalen

import { create } from 'zustand'

const getInitialSignUpData = () => ({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  error: '',
  isSubmitting: false
})

const getInitialLoginData = () => ({
  email: '',
  password: '',
  error: '',
  isSubmitting: false
})

export const useFormStore = create((set) => ({

  //signup form state
  signUpData: getInitialSignUpData(),

  setSignUpField: (field, value) => 
    set((state) => ({
      signUpData: { ...state.signUpData, [field]: value}
    })),

  setSignUpError: (error) =>
    set((state) => ({
      signUpData: {...state.signUpData, error}
    })),

  setSignUpSubmitting: (isSubmitting) =>
    set((state) => ({
      signUpData: {...state.signUpData, isSubmitting}
    })),

  resetSignUp: () => set({ signUpData: getInitialSignUpData() }),

  //login form state
  loginData: getInitialLoginData(),

  setLoginField: (field, value) =>
    set((state) => ({
      loginData: {...state.loginData, [field]: value}
    })),
  
  setLoginError: (error) =>
    set((state) => ({
      loginData: {...state.loginData, error}
    })),

  setLoginSubmitting: (isSubmitting) =>
    set((state) => ({
      loginData: {...state.loginData, isSubmitting}
    })),

  resetLogin: () => set({ loginData: getInitialLoginData()} )

}))