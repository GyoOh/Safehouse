import { BackgroundContainer, MainContainer, CenterContainer, LeftContainer } from "../styles/styledComps";
import AppText from "../components/D3Components/AppText/AppText";
import CreatHomePost from "../components/hostPosting/CreatHomePost";
import { Container } from '@mui/material'
import Script from "next/script";
import Dropdown from "../components/D3Components/Dropdown/Dropdown";
import React from 'react'
import { AuthProvider } from "../AuthContext/AuthContext";

export default function PostHome() {
  return (
    <div className="overflow-x-auto">
      <BackgroundContainer src="homeBG.png">
        <MainContainer>
          <LeftContainer>
            <Script
              id="my-script"
              strategy="beforeInteractive"
              src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API}&libraries=places`}
            >
            </Script>
            <AuthProvider>
              <CreatHomePost />
            </AuthProvider>
          </LeftContainer>
        </MainContainer>
      </BackgroundContainer >
    </div>
  )
}

