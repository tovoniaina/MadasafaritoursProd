// import MailchimpSubscribe from 'react-mailchimp-subscribe';
// import NewsletterForm from './NewsletterForm';
// import React from 'react';

// const NewsletterSubscribe = () => {

//   const MAILCHIMP_URL = "https://smartpredict.us5.list-manage.com/subscribe/post?u=f88c61744ec02e1f277979ea1&amp;id=981697cd4a&amp;f_id=00d685e9f0";

//   return (
//     <MailchimpSubscribe
//       url={ MAILCHIMP_URL }
//       render={ ( props ) => {
//         const { subscribe, status, message } = props || {};
//         return (
//           <NewsletterForm
//             status={ status }
//             message={ message }
//             onValidated={ formData => subscribe( formData ) }
//           />
//         );
//       } }
//     />
//   );
// };

// export default NewsletterSubscribe;