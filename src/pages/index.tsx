import Image from "next/image";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount,useBalance  } from "wagmi";
import {Card } from 'antd/lib' 

import { useState, useEffect } from "react";

export default function Index() {
    const {address,isConnected} = useAccount();
    const { data, isError, isLoading } = useBalance({
        address,
    });

    const [hydrated, setHydrated] = useState(false);
    useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) {
        // Returns null on first render, so the client and server match
        return null;
    }

  return (
    <div className="pt-6 px-8">
     <ConnectButton></ConnectButton>
    {
      isConnected && (
      <Card title="我的钱包信息"  className="mt-6">
        <div>钱包地址 : { address }</div>
        <div>余额 :{data?.formatted} {data?.symbol}</div>
      </Card>
    )
    }
    </div>
  );
}
