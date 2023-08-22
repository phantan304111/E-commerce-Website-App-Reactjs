import { useCallback, useEffect, useState } from "react";
//custom hook xu ly data request den va nhap tu API
function useHttpRequest() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isdata,setData] = useState(null)
  const SendRequest = useCallback( async (requestConfig) => {
    setIsLoading(true);
    setError(null);
    // nhap data tu response sau khi SendRequest toi API
    try {
      const response = await fetch(requestConfig);
      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();
    
      setData(data)
    //  bat loi
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  },[])

  useEffect (()=> {
    SendRequest()
  },[SendRequest])
  return { isLoading: isLoading, error: error,data : isdata ,SendRequest : SendRequest};
}
export default useHttpRequest;