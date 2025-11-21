import React from "react";
import { registerRootComponent } from 'expo';
import Islam_App from './Islam_App';
import {TextSizeProvider} from './files/TextSizeContext';

function Root() {
  return (
    <TextSizeProvider>
      <Islam_App />
    </TextSizeProvider>
  );
}
registerRootComponent(Root);