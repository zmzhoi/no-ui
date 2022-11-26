import { LoaderType } from '../Loader';

type LoaderClassesType = {
  [key in LoaderType]: string;
};

export const classes: LoaderClassesType = {
  box: 'noui-box-loader',
};
