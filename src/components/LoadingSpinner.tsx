import React from 'react';
import { Loader } from '@mantine/core';

const LoadingSpinner = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Loader size="lg" />
        </div>
    );
};

export default LoadingSpinner;
