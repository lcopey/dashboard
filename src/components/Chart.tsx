import Plot from 'react-plotly.js';
// import { useSetData } from './selection_provider';
import { plotlyWhite, plotlyDark } from './PlotlyTemplate.json';
import { useTheme } from '@mui/material';

interface Props {
    data: Array<Object>;
    layout?: Object;
}

export default function Chart({ data = [], layout = {} }: Props) {
    const theme = useTheme();
    // const { dataSelected, setDataSelected } = useSetData();
    const completedLayout = {
        ...layout,
        template: theme.palette.mode === 'light' ? plotlyWhite : plotlyDark,
    } as unknown as Plotly.Layout;
    return <Plot data={data} layout={completedLayout} />;
}
