import React from 'react';
import { useRef } from 'react'

const Preview = () => {
    const iframeRefs = Array.from({ length: 8 }, () => useRef(null));
    const currentIndexRef = useRef(0);
  
    const handleArrowClick = (direction) => {
      if (direction === 'prev') {
        currentIndexRef.current = (currentIndexRef.current - 1 + iframeRefs.length) % iframeRefs.length;
      } else if (direction === 'next') {
        currentIndexRef.current = (currentIndexRef.current + 1) % iframeRefs.length;
      }
      iframeRefs[currentIndexRef.current].current.scrollIntoView({ behavior: 'smooth' });
    };
  
    const gridItems = [
  {
        title: 'St Peters',
    iframeSrc: 'https://www.kuula.co/share/collection/7kyGY?logo=-1&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1',
  },
  {
    title: 'Hanover',
    iframeSrc: 'https://www.kuula.co/share/collection/7kyGh?logo=-1&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1',
  },
  {
    title: 'Thibualt Sqaure - Vogue House',
    iframeSrc: 'https://www.kuula.co/share/collection/7ky0B?logo=-1&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1',
  },
  {
    title: 'Ruskin House',
    iframeSrc: 'https://www.kuula.co/share/collection/7kWWf?logo=-1&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1',
  },
  {
    title: 'Ileli Residence',
    iframeSrc: 'https://www.kuula.co/share/collection/7kVFT?logo=-1&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1',
  },
  {
    title: 'Malade House',
    iframeSrc: 'https://www.kuula.co/share/collection/7kxs9?logo=-1&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1',
  },
  {
    title: 'Post Grad Residence',
    iframeSrc: 'https://www.kuula.co/share/collection/7kxjd?logo=-1&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1',
  },
  {
    title: 'Sacco Residence',
    iframeSrc: 'https://www.kuula.co/share/collection/7kxFJ?logo=-1&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1',
  },
      ];

    return (
        <div className='mb-[4rem] mt-[6rem]'>
        <h1 className='textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block'> Suggested For You: </h1>
    <div>
      <div className='grid gap-[2rem] grid-cols-4 items-center'>
      {gridItems.map((item, index) => (
        <div key={index} className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]' ref={iframeRefs[index]}>
          <h4><strong>{item.title}</strong></h4>
          <iframe
            className="rounded-iframe"
            width="100%"
            height="500"
            frameborder="0"
            allow="xr-spatial-tracking; gyroscope; accelerometer"
            scrolling="no"
            src={`${item.iframeSrc}#${index}`}
          ></iframe>
        </div>
    ))}
</div>
    </div>
    </div>
  );
  }

  export default Preview;