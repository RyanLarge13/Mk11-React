export const styles = {
  paragraph1:
    "leading-5 font-serif mt-[1em] text-white text-1xl xxs:text-xs xxs:w-[75%]",
  button: "px-[2em] py-[1em]",
  heading2: "text-3xl mb-1 font-semibold font-semibold xxs:text-1xl",
  button:
    "py-[.75em] px-[1.25em] m-[0.25em] bg-gradient-to-r to-yellow-300 from-pink-600 rounded-md text-black font-bold font-serif shadow-md z-[900]",
  strongLeft:
    "text-transparent text-5xl bg-clip-text bg-gradient-to-r from-pink-600 to-yellow-300 xxs:text-2xl",
  strongRight:
    "text-transparent text-5xl bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-600 xxs:text-2xl",
  smallRight:
    "text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-600",
  slateRight: "to-slate-700 from-slate-900",
  slateLeft: "to-slate-900 from-slate-700",
  label: "text-white font-serif text-3xl xxs:text-sm",
  input:
    "p-3 font-serif w-[25vw] border-none outline-none mt-5 mb-10 rounded-lg shadow-2xl xxs:p-1 xxs:w-[90%]",
};

export const layouts = {
  fullCol:
    "h-screen w-screen flex flex flex-col bg-black justify-center items-center relative",
  smallCol:
    "h-[10vh] w-screen flex flex flex-col bg-black justify-center items-center relative",
  fullReg: "h-screen w-screen flex flex-row bg-black",
};

export const components = {
  cards:
    "p-[1em] opacity-0 absolute left-0 rounded-xl text-white shadow-2xl font-serif bg-gradient-to-r xxs:w-[70%] xxs:top-[20%]",
  videos:
    "p-[1em] mt-[5em] text-white shadow-2xl font-serif bg-gradient-to-r w-[80%] rounded-lg xxs:w-[50vw]",
  nav: "fixed right-[-1000px] t-0 h-[80px] w-[100vw] shadow-xl",
};
