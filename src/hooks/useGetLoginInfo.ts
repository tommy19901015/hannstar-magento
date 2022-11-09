import { useState, useEffect } from 'react';

declare global {
    interface Window { hannstar: any; }
}

function useGetLoginInfo(): any {
  // const [loginInfo, setLoginInfo] = useState({islogin:false});

  // useEffect(() => {
  //   if(window.hannstar){
  //     setLoginInfo(window.hannstar)
  //   }
  // }, []);

  return window.hannstar;
}

export default useGetLoginInfo;
