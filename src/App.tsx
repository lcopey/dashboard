// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Chart from '@app/components/Chart';
import { DataSelectedProvider } from '@app/components/SelectionProvider';
import { ColorModeProvider, ColorButton } from './components/ColorMode';
import { CssBaseline } from '@mui/material';

function App() {
    // const [count, setCount] = useState(0)

    return (
        <div>
            <ColorModeProvider>
                <DataSelectedProvider>
                    <CssBaseline></CssBaseline>
                    <ColorButton></ColorButton>
                    <Chart
                        data={[
                            {
                                x: [0, 1, 2],
                                y: [2, 1, 3],
                                type: 'scatter',
                                mode: 'markers',
                            },
                        ]}
                    />
                </DataSelectedProvider>
            </ColorModeProvider>
        </div>
    );
}

export default App;
