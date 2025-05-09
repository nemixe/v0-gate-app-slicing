"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TrafficLight } from "@/components/traffic-light"

export default function GateApp() {
  const [portal, setPortal] = useState<string>("portal-1")
  const [noPol, setNoPol] = useState<string>("")
  const [noContainer, setNoContainer] = useState<string>("")
  const [noQRDoc, setNoQRDoc] = useState<string>("")
  const [status, setStatus] = useState<"idle" | "green" | "yellow" | "red">("idle")

  const handleSubmit = () => {
    // Simple logic for demonstration purposes
    if (!noPol && !noContainer && !noQRDoc) {
      setStatus("red")
    } else if (!noPol || !noContainer || !noQRDoc) {
      setStatus("yellow")
    } else {
      setStatus("green")
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-lg p-6 border-2 border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Inputs */}
          <div className="space-y-4 p-4 bg-gray-50 rounded-xl">
            <div className="space-y-2">
              <Label htmlFor="portal">Portal</Label>
              <Select value={portal} onValueChange={setPortal}>
                <SelectTrigger id="portal" className="w-full">
                  <SelectValue placeholder="Select Portal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="portal-1">Portal V</SelectItem>
                  <SelectItem value="portal-2">Portal A</SelectItem>
                  <SelectItem value="portal-3">Portal B</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4 pt-2">
              <div className="space-y-2">
                <Label htmlFor="no-pol" className="text-sm font-medium">
                  No Pol.
                </Label>
                <Input
                  id="no-pol"
                  value={noPol}
                  onChange={(e) => setNoPol(e.target.value)}
                  placeholder="Enter policy number"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="no-container" className="text-sm font-medium">
                  No Container
                </Label>
                <Input
                  id="no-container"
                  value={noContainer}
                  onChange={(e) => setNoContainer(e.target.value)}
                  placeholder="Enter container number"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="no-qr-doc" className="text-sm font-medium">
                  No QR/Doc
                </Label>
                <Input
                  id="no-qr-doc"
                  value={noQRDoc}
                  onChange={(e) => setNoQRDoc(e.target.value)}
                  placeholder="Enter QR/Doc number"
                />
              </div>
            </div>

            <Button className="w-full mt-4" onClick={handleSubmit}>
              Submit
            </Button>
          </div>

          {/* Right side - Traffic Light */}
          <div className="flex flex-col items-center justify-center">
            <TrafficLight activeColor={status} />
            <div className="mt-6 text-center">
              {status === "green" && <p className="text-green-600 font-medium">All Clear</p>}
              {status === "yellow" && <p className="text-yellow-600 font-medium">Missing Information</p>}
              {status === "red" && <p className="text-red-600 font-medium">Cannot Proceed</p>}
              {status === "idle" && <p className="text-gray-600 font-medium">Waiting for submission</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
