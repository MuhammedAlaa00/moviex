import React,{useState} from 'react';
import Fixtures from '../../components/Fixtures/Fixtures';
import FixData from '../../fixturesJsonData/faqs.json';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import OptForm from '../../components/Fixtures/OptForm';
function FixturesMainContainer() {
    const [index, setindex] = useState(0);
    const HandleOpen = (id) => {
        if(id !== index)
        {
            setindex(id);
            console.log(id === index);
        }
    }
    const HandleClose = (id) => {
        if(id === index)
        {
            setindex(null)
            console.log(id === index);
        }
    }
    return (
        <div>
            <Fixtures Data={FixData}>
                <Fixtures.Container>
                    <Fixtures.Title>
                        Frequently Asked Questions
                    </Fixtures.Title>
                    {FixData.map(item => 
                        <Fixtures.Item isCollapsed= {index !== item.id} key={item.id} id={item.id}>
                            <Fixtures.Header>
                                {item.header}
                                {
                                    index === item.id ? <CloseIcon onClick={() => HandleClose(item.id)}/> : <AddIcon onClick={()=>HandleOpen(item.id)}/>
                                }
                            </Fixtures.Header>
                            <Fixtures.Body item = {item.id}>
                                {item.body}
                            </Fixtures.Body>
                        </Fixtures.Item>    
                    )}
                </Fixtures.Container>
            </Fixtures>
            <OptForm/>
        </div>
    )
}
export default FixturesMainContainer
