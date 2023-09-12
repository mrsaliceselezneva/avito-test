module.exports = {
    moduleFileExtensions: ["js", "jsx"],
    moduleDirectories: ["node_modules", "bower_components", "shared"],

    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.js",
        "api/utils": "<rootDir>/src/api/utils",
        "^components/(.*)$": "<rootDir>/src/components/$1",
        "^store/(.*)$": "<rootDir>/src/redux/$1",
    },
    testEnvironment: "node",
};
