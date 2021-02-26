
import React, { useState } from 'react';
import Head from 'next/head';
import { Helmet } from 'react-helmet';

/* User Dashboard Components */
import Loading from '../Loading';
/* import UserBottomNav  from '../Navigation/UserBottomNav' */
import {  SidenavDashboard, UserBottomNav } from '../'


type LoadingContextValue = {
    showLoading: () => void;
    hideLoading: () => void;
  };

  const loadingContextDefault: LoadingContextValue = {
    showLoading: () => {},
    hideLoading: () => {},
  };

  export const LoadingContext = React.createContext(loadingContextDefault);



type UserdsLayoutProps = {
    children: React.ReactNode;
    title?: string;
    description?: string;
    keywords?: string;
  };

  const UserdsLayout = ({ children, title, description, keywords }: UserdsLayoutProps) => {


    const metaTags = [
      { property: 'og:title', content: title },
      {
        name: 'description',
        content: description,
      },
      {
        name: 'keywords',
        content: keywords,
      },
    ];

    const SEOOverride =
      title && description ? <Helmet title={title} meta={metaTags} /> : null;

   

    return (
      <>
        <Head>
          {title && <title>{title}</title>}
          {title && <meta property="og:title" content={title} />}
          {description && <meta name="description" content={description} />}
          {keywords && <meta name="keywords" content={keywords} />}
        </Head>
        {SEOOverride}
    
      

    
            {children}
        
          
       
      </>
    );
  };

  export default UserdsLayout;
