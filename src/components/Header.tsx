import type { InputProps } from '@mantine/core';
import { Input } from '@mantine/core';
import { IconSearch, IconShoppingCart, IconUser } from '@tabler/icons-react';
import Link from 'next/link';
import LanguageToggle from './Header/LanguageToggle';

interface CustomInputProps extends InputProps {
  icon?: React.ReactNode;
  placeholder?: string; // Ensure placeholder is included in CustomInputProps
}

const CustomInput = (props: CustomInputProps) => <Input {...props} />;

export default function Header() {
  return (
    <header className="border-b py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">EcoZone eCommerce</h1>
        </div>
        <div className="flex items-center space-x-4">
          <CustomInput 
            icon={<IconSearch size={16} />} 
            placeholder="Search in products" 
            className="w-64" 
          />
          <nav className="flex items-center space-x-4">
            <LanguageToggle />
            <Link href="/profile" className="flex items-center space-x-2">
              <IconUser size={16} />
              <span>Profile</span>
            </Link>
            <Link href="/cart" className="flex items-center space-x-2">
              <IconShoppingCart size={16} />
              <span>Cart</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
