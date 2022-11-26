import { LoaderType } from '../Loader';

type CSSType = {
  [key in LoaderType]: string;
};

export const styles: CSSType = {
  box: `
    @keyframes showDown {
      0% {
        opacity: 0.2;
        transform: translate3d(0px, -200px, 0px);
      }
      80% {
        opacity: 1;
        transform: translate3d(0px, 5px, 0px);
      }
      90% {
        transform: translate3d(0px, -2px, 0px);
      }
      100% {
        transform: translate3d(0px, 0px, 0px);
      }
    }

    @keyframes hideUp {
      0% {
        opacity: 1;
        transform: translate3d(0px, 0px, 0px);
      }
      100% {
        opacity: 0;
        transform: translate3d(0px, -200px, 0px);
      }
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes fadeOut {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
    
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    
    .noui-box-loader {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 2000;
      display: flex;
      justify-content: center;
    }
    
    .noui-box-loader > .overlay {
      background: rgba(240, 240, 240, 0.7);
      position: absolute;
      width: 100vw;
      height: 100vh;
    }
    
    .noui-box-loader > .box-loader {
      position: absolute;
      top: 0.7rem;
    
      box-sizing: border-box;
      height: 40px;
      padding: 0.3rem 0.9rem;
    
      background: white;
      border-radius: 5px;
    
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0px 1px 4px 1px rgb(0 0 0 / 10%);
    }
    .noui-box-loader.enter > .overlay {
      animation: fadeIn 0.35s ease-out;
    }
    .noui-box-loader.exit > .overlay {
      animation: fadeOut 0.35s ease-out;
    }
    .noui-box-loader.enter > .box-loader {
      animation: showDown 0.35s ease-in-out;
    }
    .noui-box-loader.exit > .box-loader {
      animation: hideUp 0.35s ease-in-out;
    }
    
    .noui-box-loader > .box-loader > .message {
      font-size: 0.9rem;
      font-weight: 500;
      color: #606060;
      margin-left: 0.7rem;
    }
  `.replace(/(^|\n)\s*/g, ''),
};
