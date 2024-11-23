import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { useState } from 'react';

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  const handleBuyNow = () => {
    // Implement buy now functionality here
    console.log('Buy Now clicked', { quantity });
  };
  return (
    <div>
      {' '}
      <div>
        <h2 className='text-lg font-semibold mb-2'>Quantity</h2>
        <div className='flex items-center space-x-2'>
          <Button
            variant='outline'
            size='icon'
            onClick={decrementQuantity}
            disabled={quantity <= 1}
          >
            <MinusIcon className='h-4 w-4' />
          </Button>
          <Input
            type='number'
            value={quantity}
            onChange={(e) =>
              setQuantity(Math.max(1, parseInt(e.target.value) || 1))
            }
            className='w-20 text-center'
            min='1'
          />
          <Button variant='outline' size='icon' onClick={incrementQuantity}>
            <PlusIcon className='h-4 w-4' />
          </Button>
        </div>
      </div>
      {/* Buy Now Button */}
      <Button onClick={handleBuyNow} className='w-full mt-10'>
        Add to cart
      </Button>
    </div>
  );
};

export default QuantitySelector;
