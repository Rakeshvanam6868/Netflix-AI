export const checkValidateData = (email, password, fullname, isSignInForm) => {
    const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
  
    if (!isEmailValid) return "Email ID is not valid";
    if (!isPasswordValid) return "Password is not valid";
  
    if (!isSignInForm) { // Only validate fullname during Sign Up
      if (!fullname || fullname.trim() === "") return "Please enter your full name (first & last name)";
      const isFullNameValid = /^[a-zA-Z]+ [a-zA-Z]+$/.test(fullname);
      if (!isFullNameValid) return "Please enter your full name (first & last name)";
    }
  
    return null;
  };
  