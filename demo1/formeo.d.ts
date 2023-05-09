declare module 'formeo' {
    export class FormeoEditor {
      constructor(options: any);
    }
  
    export class FormeoRenderer {
      constructor(options: any);
      render(formData: any): void;
    }
  }
  