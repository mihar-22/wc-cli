import {
  SourceFile, Symbol, PropertyDeclaration, MethodDeclaration, ClassDeclaration,
  Type, Decorator, Node, Signature,
} from 'typescript';

export type TypeText = 'any' | 'string' | 'number' | 'boolean' | 'unknown';

export interface TypeReferences {
  [key: string]: TypeReference;
}

export interface TypeReference {
  location: 'local' | 'global' | 'import';
  path?: string;
}

export interface PropTypeInfo {
  original: string;
  resolved: string;
  references: TypeReferences;
}

export interface PropMeta {
  symbol: Symbol;
  type: Type;
  declaration: PropertyDeclaration;
  decorator: Decorator;
  typeText: TypeText;
  typeInfo: PropTypeInfo;
  docTags: DocTag[];
  name: string;
  required: boolean;
  readonly: boolean;
  optional: boolean,
  attribute: string;
  reflect: boolean;
  internal: boolean;
  deprecated: boolean;
  defaultValue: string;
  documentation?: string;
}

export interface MethodTypeInfo {
  signature: string;
  return: string;
  references: TypeReferences;
}

export interface MethodMeta {
  symbol: Symbol;
  declaration: MethodDeclaration;
  name: string;
  typeInfo: MethodTypeInfo;
  signature: Signature;
  returnType: Type;
  internal: boolean;
  deprecated: boolean;
  docTags: DocTag[];
  documentation?: string;
}

export interface EventMeta {
  symbol: Symbol;
  declaration: PropertyDeclaration;
  decorator: Decorator;
  type: Type;
  typeText: string;
  typeInfo: PropTypeInfo;
  name: string;
  bubbles: boolean;
  composed: boolean;
  internal: boolean;
  deprecated: boolean;
  docTags: DocTag[];
  documentation?: string;
}

export interface CssPropMeta {
  name: string
  description?: string
  node: Node
}

export interface CssPartMeta {
  name: string
  description?: string
  node: Node
}

export interface SlotMeta {
  name: string
  default: boolean
  description?: string
  node: Node
}

export interface DocTag {
  name: string
  text?: string
  node: Node
}

export interface ComponentMeta {
  tagName: string;
  documentation?: string;
  symbol: Symbol;
  declaration: ClassDeclaration
  sourceFile: SourceFile;
  sourceFilePath: string;
  className: string;
  docTags: DocTag[];
  props: PropMeta[];
  methods: MethodMeta[];
  events: EventMeta[];
  cssProps: CssPropMeta[];
  cssParts: CssPartMeta[];
  slots: SlotMeta[];
  references: TypeReferences;
  dependencies: ComponentMeta[];
}
