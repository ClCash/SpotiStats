import localFont from 'next/font/local'
import { Lusitana } from 'next/font/google';

// import blah from './fonts/BebasNeue-Regular.ttf'

export const lusitana = Lusitana({ 
    weight: ['400', '700'],
    subsets: ['latin']
});

export const BebasFont = localFont({
    src: './fonts/BebasNeue-Regular.ttf', 
})
export const Segoe = localFont({
    src: './fonts/SegoeUI.ttf', 
})
export const SegoeBold = localFont({
    src: './fonts/SegoeBold.ttf', 
})