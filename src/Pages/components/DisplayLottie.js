import React from 'react';
import { useLottie } from 'lottie-react'

export default function DisplayLottie({lottiePath}) {
    const options = {
      loop: true,
      autoplay: true,
      animationData: lottiePath
    }

    const style = {
      height: 300,
    };

    const { View } = useLottie(options, style);

  return <div>
    <div onClick={() => null}>
      {View}
    </div>
  </div>;
}
