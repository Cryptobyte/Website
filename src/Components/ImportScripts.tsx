import { useEffect } from 'react';

export default function ImportScripts(src: string[]) {
  useEffect(() => {
    let scripts: any[] = [];
    for (let _script of src) {
      const script = document.createElement('script');
      script.src = _script;
      document.body.appendChild(script);
      scripts.push(script);
    }
    
    return () => {
      for (let script of scripts) {
        document.body.removeChild(script);
      }
    }

  }, [src]);
}
