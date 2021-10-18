cmake_minimum_required(VERSION 3.20)
project(rookie_learning C)

set(CMAKE_C_STANDARD 11)

add_executable(rookie_learning
        c_learning/src/hello.c c_learning/src/plus.c)
