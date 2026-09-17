import { describe, it, expect, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { DesignModeProvider, useDesignMode } from "./DesignModeContext";

describe("DesignModeContext", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("defaults to blueprint mode when nothing is stored", () => {
    const { result } = renderHook(() => useDesignMode(), { wrapper: DesignModeProvider });
    expect(result.current.mode).toBe("blueprint");
  });

  it("persists the mode to localStorage when toggled", () => {
    const { result } = renderHook(() => useDesignMode(), { wrapper: DesignModeProvider });

    act(() => result.current.toggleMode());

    expect(result.current.mode).toBe("launch");
    expect(localStorage.getItem("design-mode")).toBe("launch");
  });

  it("restores a previously persisted mode on mount", () => {
    localStorage.setItem("design-mode", "launch");

    const { result } = renderHook(() => useDesignMode(), { wrapper: DesignModeProvider });

    expect(result.current.mode).toBe("launch");
  });
});
