import { Card, CardHeader } from '@/components/ui/card';
import { Typography } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import { Blocks, ClipboardList, Lightbulb, ScanSearch } from 'lucide-react';
import React from 'react';

type CardData = {
  title: string;
  description: string;
};

type FormatProps = {
  data: CardData[];
};

const Format: React.FC<FormatProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-10 mt-10 md:mt-20">
      <Typography variant="heading3">Delivered in a format that works</Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {data.map((card, index) => (
          <Card className="border border-brand rounded-xl p-10 min-h-[500px] flex flex-col" key={index}>
              {index === 0 && <ScanSearch className='h-20 w-20 text-accent' />}
              {index === 2 && <Blocks className='h-20 w-20 text-accent' />}
              <div className={index == 1 ? "flex flex-col gap-3" : 'mt-auto flex flex-col gap-3'}>
                <Typography variant='heading4'>{card.title}</Typography>
                <Typography variant="paragraph">{card.description}</Typography>
              </div>
              {index === 1 && <Lightbulb className='mt-auto h-20 w-20 text-accent' />}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Format;