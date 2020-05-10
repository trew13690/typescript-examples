const domAge = (document.querySelector('#age').textContent as any as number);

const f: any = document.querySelector('#age').textContent;
const domAge2: number = f as number; 

const s: string = (document.querySelector('#button') as HTMLElement).style.background