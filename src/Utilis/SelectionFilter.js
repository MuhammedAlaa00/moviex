export default function SelectionFilter({series,films}) {
    return {
        series : [
            {
                title:'documentaries',
                data: series.filter((item) => item.genre === 'documentaries')
            },
            {
                title:'comedies',
                data: series.filter((item) => item.genre === 'comedies')
            },
            {
                title:'children',
                data: series.filter((item) => item.genre === 'children')
            },
            {
                title:'crime',
                data: series.filter((item) => item.genre === 'crime')
            },
            {
                title:'Feel Good',
                data: series.filter((item) => item.genre === 'feel-good')
            }
        ],
        films : [
            {
                title:'suspense',
                data: films.filter((item) => item.genre === 'suspense')
            },
            {
                title:'children',
                data: films.filter((item) => item.genre === 'children')
            },
            {
                title:'romance',
                data: films.filter((item) => item.genre === 'romance')
            },
            {
                title:'drama',
                data: films.filter((item) => item.genre === 'drama')
            },
            {
                title:'thriller',
                data: films.filter((item) => item.genre === 'thriller')
            },
        ]
    }
}