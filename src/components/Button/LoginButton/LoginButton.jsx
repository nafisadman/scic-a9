import Link from 'next/link'

import React from 'react';

const LoginButton = () => {
    return (
        <Link href="/login" className="btn">Login</Link>
    );
};

export default LoginButton;