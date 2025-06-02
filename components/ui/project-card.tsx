"use client"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import type { Project } from "@/lib/types"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-md dark:hover:shadow-gray-800">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg?height=200&width=400&query=mobile app interface"}
          alt={project.title}
          width={400}
          height={200}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex space-x-3">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            )}
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200 transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
                <span className="sr-only">Live Demo</span>
              </Link>
            )}
          </div>
        </div>
      </div>
      <CardHeader className="p-4">
        <CardTitle className="font-mono text-lg">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-grow">
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.description}</p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">
          <span className="font-medium">Role:</span> {project.role}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <Badge key={index} variant="outline" className="font-mono text-xs">
            {tech}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  )
}
