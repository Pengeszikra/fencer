# FENCER
Experimental functional JSX framework.

**Highlights:**
- JSX syntax
- functional side effects handling
- minimal size

## Usage
```yarn add fencer```

## example : under construct!!

```jsx
import {fencer, portal, jlog} from 'fencer';
import {useFetch, readTextFormat} from 'fencer-fetch';

const SelfDump = ({dump}) => (
  <main>
    <h1>self dump :: fencer</h1>
    <hr/>
    <pre>{dump |> jlog}</pre>
  </main>
);

useFetch('')
  |> readTextFormat
  |> map(dump => ({dump}))
  |> SelfDump
  |> portal;
```

### *Bonus: poipeline operator*

#### **.babelrc**
```json
{
  "plugins": [
    [ "@babel/plugin-proposal-pipeline-operator", {"proposal": "minimal"}],
    "@babel/plugin-syntax-jsx",    
    [ "@babel/plugin-transform-react-jsx", { "pragma": "fencer" }]    
  ]
}
```

*- KIHAL -*