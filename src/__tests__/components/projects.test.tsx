import {render,screen} from '@testing-library/react'
import Projects from '../../components/projects';

describe('Projetos devem estar na tela.',()=> {
  test('teste apareceram',()=>{
    render(<Projects />);
    expect(screen.getByText('Projetos')).toBeTruthy()
  })
})

