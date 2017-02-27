module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "env": {
        "browser": true
    },
    "rules": {
        "max-len": [1, 120],
        "react/forbid-prop-types": ["off"],
        "no-debugger": ["off"],
        "no-unused-vars": ["warn"],
        "import/prefer-default-export": ["warn"],
        "react/prop-types": ["warn"]
    }
};
