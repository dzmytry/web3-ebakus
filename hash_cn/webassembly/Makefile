TARGET = prog
LIBS = -lm

CC = emcc -Os -s SINGLE_FILE=1 -s  NO_FILESYSTEM=1 -s EXTRA_EXPORTED_RUNTIME_METHODS=["cwrap"] --llvm-lto 1 -s TOTAL_MEMORY=67108864 -s WASM=1 -s BINARYEN=1 -s BINARYEN_TRAP_MODE="js" -s BINARYEN_METHOD="native-wasm" -s BINARYEN_ASYNC_COMPILATION=1 -s EXPORTED_FUNCTIONS=["_cryptonight"] -o ./cryptonight.js

CFLAGS =  -Wall

.PHONY: default all clean

default: $(TARGET)
all: default

OBJECTS = $(patsubst %.c, %.o, $(wildcard *.c))
HEADERS = $(wildcard *.h)

%.o: %.c $(HEADERS) $(CC) $(CFLAGS) -c $< -o $@

.PRECIOUS: $(TARGET) $(OBJECTS)

$(TARGET): $(OBJECTS)
	$(CC) $(OBJECTS) -Wall $(LIBS)

clean:
	-rm -f *.o
	-rm -f $(TARGET)
