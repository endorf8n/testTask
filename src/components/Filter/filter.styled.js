export const styleSelect = {
  option: (provided) => {
    return {
      ...provided,
      background: "transparent",
      border: "none",
      outline: "none",

      fontSize: "18px",
      fontWeight: "400",
      color: "rgba(255, 255, 255, 0.8)",
      backgroundColor: "transparent",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        color: "#FF868D",
        fontWeight: "400",
      },
      textAlign: "left",
    };
  },
  control: (styles) => ({
    ...styles,
    width: "300px",
    fontFamily: "Montserrat",
    border: "1px solid rgba(255, 255, 255, 0.4)",
    borderRadius: "10px",
    boxShadow: "none",
    backgroundColor: "rgba(74, 86, 226, 0.4)",
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return {
      ...provided,
      opacity,
      transition,
      right: 5,
      color: "#373737",
      padding: "8px 20px",
    };
  },

  menu: (provided) => {
    return {
      ...provided,
      width: "300px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "linear-gradient(to right, #be93c5, #7bc6cc)",
      borderRadius: "10px",
      blur: "5px",
    };
  },
  menuList: (base) => ({
    ...base,

    "::-webkit-scrollbar": {
      display: "none",
    },
  }),

  indicatorSeparator: () => ({}),

  indicators: () => {
    return {
      cursor: "pointer",
    };
  },

  dropdownIndicator: (provided) => {
    return {
      ...provided,
      color: "rgba(255, 255, 255, 0.8)",
      "&:hover": {
        color: "#fbfbfb",
      },
    };
  },

  input: (provided) => {
    return {
      ...provided,
      margin: "0px",
      color: "#373737",
      padding: "12px 20px",

      minWidth: "100%",
    };
  },

  placeholder: (provided) => ({
    ...provided,
    color: "#EBD8FF",
  }),
};
