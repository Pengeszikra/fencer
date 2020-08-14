# FENCER
Experimental functional JSX framework.

**Highlights:**
- JSX syntax
- functional side effects handling
- minimal size

## Usage
```npm install fencer-js```

## Preffered: Pipeline operator

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