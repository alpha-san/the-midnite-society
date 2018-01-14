/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare var mongoose:mongoose;
interface mongoose {
  Schema: any,
  Document: any
}