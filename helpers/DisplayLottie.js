import React from 'react';
import { useLottie } from 'lottie-react'

export default function DisplayLottie({lottiePath, height}) {
    const options = {
      loop: true,
      autoplay: true,
      animationData: lottiePath
    }

    const style = {
      height: height,
    };

    const { View } = useLottie(options, style);

  return <div>
    <div onClick={() => null}>
      {View}
    </div>
  </div>;
}
