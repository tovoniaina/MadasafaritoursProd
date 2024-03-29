// import React from "react";
// import jsonp

// export const Status = {
// 	idle: 'IDLE',
// 	loading: 'LOADING',
// 	success: 'SUCCESS',	
// 	error: 'ERROR'
// }

// function toQueryString(params) {
//   return Object.keys(params)
//     .map((key) => key + "=" + params[key])
//     .join("&");
// }

// export default function useMailChimp(url) {
//   const [status, setStatus] = React.useState(Status.idle);
//   const [error, setError] = React.useState(null);
//   const [value, setValue] = React.useState(null);

//   const subscribe = React.useCallback((data) => {
//     const params = toQueryString(data);
//     const ajaxURL = url.replace("/post?", "/post-json?");
//     const newUrl = ajaxURL + "&" + params;

//     setError(null);
//     setStatus(Status.loading);

//     jsonp(newUrl, { param: "c" }, (err, data) => {
//       if (err) {
//         setStatus(Status.error);
//         setError(err);
//       } else if (data.result !== "success") {
//         setStatus(Status.error);
//         setError(data.msg);
//       } else {
//         setStatus(Status.success);
//         setValue(data.msg);
//       }
//     });
//   }, []);

//   return { subscribe, status, error, value };
// }