import React, { useState, ReactNode, ErrorInfo } from "react";

interface ErrorBoundaryProps {
    children: ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
    const [isError, setIsError] = useState<boolean>(false);

    const componentDidCatch = (error: Error, errorInfo: ErrorInfo) => {
        setIsError(true);
        console.error("ErrorBoundary caught an error", error, errorInfo);
    };

    if (isError) {
        return <div>An error occurred</div>;
    }

    return <>{children}</>;
};

export default ErrorBoundary;


// import ErrorBoundary from "./ErrorBoundary";
// import SomeComponent from "./SomeComponent";

// const App: React.FC = () => {
//     return (
//         <ErrorBoundary>
//             <SomeComponent />
//         </ErrorBoundary>
//     );
// };

// export default App;
