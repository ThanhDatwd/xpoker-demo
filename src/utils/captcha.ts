export const genHeader = (captcha: string) => {
  return {
    headers: {
      "X-Captcha-Token": captcha,
    },
  };
};
