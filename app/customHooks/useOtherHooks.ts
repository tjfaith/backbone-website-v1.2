const useOtherHooks = () => {
  const errorResponse = (error: any) => {
    const response =
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      "An error occurred";

    return response;
  };

  return {
    errorResponse,
  };
};

export default useOtherHooks;
